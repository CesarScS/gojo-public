
export interface ClientResponseInterface{
    ID: number;
    Names: string;
    LastName?: string; // El signo de interrogación indica que es opcional
    SecondLastname?: string;
    Birthdate?: string;
    RFC?: string;
    CURP?: string;
    Street: string;
    State: string;
    City: string;
    Email?: string;
    Phone?: string;
    Zipcode?: string;
    PersonType?: string;
    User_ID: number;
    ClientKey?: string;
    ClientKeyID?: number;
    Printed: boolean;
    hasDocumentation: boolean;
}