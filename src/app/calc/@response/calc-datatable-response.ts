export class CaclDatatableResponse {
    /**
     * constructor
     * @param contribution 
     * @param employerContrib 
     * @param employeeContrib 
     * @param subTotal 
     */
    constructor(
        public contribution: string,
        public employerContrib: string,
        public employeeContrib: string,
        public subTotal: number,
    ){}
}