function Cat(name, weight) 
{
    this.name = name;
    this.weight = weight;
  
    this.feed = function(amount) 
    {
      this.weight += amount;
      console.log(this.name + " был накормлен и теперь весит " + this.weight + " кг.");
      if (this.weight <= 4) 
        {
            this.feed(1);
        } 
    };
  
    this.diet = function(amount) 
    {
      this.weight -= amount;
      console.log(this.name + " начал диету и теперь весит " + this.weight + " кг.");
      if (this.weight >= 6) 
    {
       this.diet(1);
    }
    };
  
    this.toString = function() 
    {
      return this.name + " весит " + this.weight + " кг.";
    };
  }
  
  const myCat = new Cat("Быкандрос", 10);
  
  if (myCat.weight <= 4) 
  {
    myCat.feed(1);
  } 
  else if (myCat.weight >= 6) 
  {
    myCat.diet(1);
  }
  
  console.log(myCat.toString());
  