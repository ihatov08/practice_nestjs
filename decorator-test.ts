function Get(endpoint?: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(endpoint);
  };
}

class Cat {
  say() {
    console.log('cat said');
  }
}

const cat = new Cat();
cat.say();
