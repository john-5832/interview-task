const orders = [
{ id: 1, status: 'pending' },
{ id: 2, status: 'shipped' },
{ id: 3, status: 'pending' },
{ id: 4, status: 'delivered' }
];

function countByStatus(orders){
    return orders.reducs((result,order)=>{
        result[order.status]=(result[order.status]|| 0 )+ 1;
        return result;
    },{});
}

const output = countByStatus(orders);
console.log(output);