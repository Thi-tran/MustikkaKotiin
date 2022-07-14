export const isDeliveryOrder = (delivery) => {
  if (delivery === 'home') {
    return true
  }
  return false;
}

export const getDeliveryMethodText = (delivery) => {
  return `${isDeliveryOrder(delivery) ? 'Kotiin toimistus' : 'Noudat Työpajankatu 5 klo 14-15'}`;
}

export const getOrderTotal = (orderList) => {
  let sum = 0;
  orderList.forEach((order) => {
    if (!order.order) {
      return;
    }

    sum += order.order * order.price;
  })

  return sum;
}

export const DELIVERY_FEE = 5;
export const PICKUP_ADDRESS = 'Työpajankatu 5'