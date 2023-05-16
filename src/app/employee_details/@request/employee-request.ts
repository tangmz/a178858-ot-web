export interface EmployeeRequest {
    id?: number;
    username: string;
    password: string;
    userType?: string;
    name: string;
    phoneNumber: string;
    baseSalary: number;
    position: string;
}