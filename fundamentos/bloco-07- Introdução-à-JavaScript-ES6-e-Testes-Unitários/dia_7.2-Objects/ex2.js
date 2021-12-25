const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
// const ana = order.order.delivery.deliveryPerson;
// const rafael = order.name;
// const phone = order.phoneNumber;
// const addressStreet = order.address.street;
// const addressStreetNumber = order.address.number;
// const addressApartment = order.address.apartment;

// return `Olá, ${ana}, entrega para: ${rafael}, telefone: ${phone}, R.${addressStreet}, N° ${addressStreetNumber}, AP: ${addressApartment}`;
// }

// console.log(customerInfo(order));
}
customerInfo(order);
const orderModifier = (order) => {
const luizSilva = order.name = 'Luiz Silva';
const pizzaflavor = Object.keys(order.order.pizza).join(', '); // join serve apenas para ficar separado entre a vírgula e o espaço
const beverage = Object.keys(order.order.drinks).join(', '); // join serve apenas para ficar separado entre a vírgula e o espaço
const price = order.payment.total = '50';

return `Olá, ${luizSilva}! O total do seu pedido de ${pizzaflavor} e ${beverage} é R$${price}`;
}
console.log(orderModifier(order));
