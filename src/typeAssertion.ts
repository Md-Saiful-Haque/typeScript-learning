// Type assertion in TypeScript is essentially a way to tell the compiler, "Trust me, I know what I’m doing." It’s like giving a gentle nudge to the type checker when you have more information about a value's type than TypeScript can automatically infer. 

// TODO : Type assertion হলো টাইপস্ক্রিপ্ট কম্পাইলারকে জোর দিয়ে বলা যে, "এই ভ্যারিয়েবলটি অমুক টাইপের, তুমি এটা নিয়ে চিন্তা করো না।

let anything: any

anything = 22;

// (anything as number)

const kgToGmConverter = (input: string | number) => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`;
    }
}

const result1 = kgToGmConverter(2)
const result2 = kgToGmConverter("2 kg")