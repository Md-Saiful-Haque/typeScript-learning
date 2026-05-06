interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X;
}

interface lowerBrandWatch {
    mi: string;
    haveStopWatch: boolean
}

const poorDeveloper: Developer<lowerBrandWatch, {
    brand: 'hero';
    engineCapacity: "200cc"
}> = {
    name: 'Mr. Poor',
    salary: 20000,
    device: {
        brand: 'hp',
        model: 'Elite book g25',
        releasedYear: '2016'
    },
    smartWatch: {
        mi: 'M40',
        haveStopWatch: true
    }
}



const richDeveloper: Developer<{
    apple: string;
    haveStopWatch: boolean;
    AIFeatures: boolean
}> = {
    name: 'Mr. Rich',
    salary: 80000,
    device: {
        brand: 'apple',
        model: 'Elite book g25',
        releasedYear: '2025'
    },
    smartWatch: {
        apple: 'M40',
        haveStopWatch: true,
        AIFeatures: true
    },
    bike: null
}