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
        public employerContrib: number,
        public employeeContrib: number,
        public subTotal: number,
    ){}
}