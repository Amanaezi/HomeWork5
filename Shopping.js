let basket = [];

basket.push("молоко");
basket.push("хлеб");
basket.push("кола");
basket.push("печенье");

while (basket.length > 0) 
{
  let lastItem = basket.pop();
  console.log("Вынимаем товар из корзины: " + lastItem);
}