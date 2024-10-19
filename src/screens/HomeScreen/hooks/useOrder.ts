import { useState, useCallback, useMemo } from 'react';
import { TMenuItem, TOrderItem } from '../types';

const useOrder = (menuItems: TMenuItem[]) => {
  const [orderItems, setOrderItems] = useState<TOrderItem>({});

  const handleAddItem = useCallback((itemId: number) => {
    setOrderItems((prevItems) => ({
      ...prevItems,
      [itemId]: (prevItems[itemId] || 0) + 1,
    }));
  }, []);

  const totalPrice = useMemo(() => {
    const price = Object.entries(orderItems).reduce((sum, [itemId, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(itemId));
      return sum + (item ? item.price * quantity : 0);
    }, 0);
    return Math.round(price * 0.98); // Apply 2% discount
  }, [orderItems, menuItems]);

  const points = useMemo(() => {
    return 0 + Math.floor(totalPrice / 10);
  }, [totalPrice]);

  return { orderItems, handleAddItem, totalPrice, points };
};

export default useOrder;
