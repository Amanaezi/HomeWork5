const bankCard = 
{
    cardNumber: "1234 5678 9250 6615",
    firstName: "Артем",
    lastName: "Рублевский",
    securityCode: 123,
    balance: 1000,
    bankName: "Банк",
  };
  
  const atm = 
  {
    atmNumber: "ATM421",
    
    withdraw: function(card, amount) 
    {
      
      if (this.validateCard(card)) 
      {
        if (card.balance >= amount) 
        {
          console.log("Счет до снятия: " + card.balance + " грн");
          card.balance -= amount;
          console.log("Сумма " + amount + " грн снята успешно.");
        } 
        else 
        {
          console.log("Недостаточно средств на счете.");
        }
      } 
      else 
      {
        console.log("Ошибка: Неверный номер карточки или код.");
        return;
      }
      console.log("Счет после снятия: " + card.balance + " грн");
    },
    
    validateCard: function(card) 
    {
      return (card.cardNumber === bankCard.cardNumber && card.securityCode === bankCard.securityCode);
    },
  };
  
  const bank = [bankCard];
  
  const anotherCard = 
  {
    cardNumber: "1234 5678 9009 8765",
    securityCode: 999,
  };
  
  atm.withdraw(bankCard, 500);
  atm.withdraw(anotherCard, 500);