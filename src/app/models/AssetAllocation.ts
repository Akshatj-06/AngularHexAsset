export class AssetAllocationModel {
    allocationId: number;
    assetId: number;
    userId: number;
    allocationDate: string;
    returnDate: string;
    allocationStatus: string;


    constructor() {
        this.allocationId = 0;
        this.assetId = 0;
        this.userId = 0;
        this.allocationDate = "";
        this.returnDate = "";
        this.allocationStatus = "";
    }
}