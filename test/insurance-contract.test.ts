import {BaseContract, InsuranceContract} from '../src/contracts'

test('Deposit contract fields are correct', () =>{
    const insuranceContract = new InsuranceContract("1", "Kevin", true, "health", 100, 3);
    expect(insuranceContract.contractId).toBe("1");
    expect(insuranceContract.clientName).toBe("Kevin");
    expect(insuranceContract.isActive).toBeTruthy();
    expect(insuranceContract.insuranceType).toBe("health");
    expect(insuranceContract.premium).toBe(100);
    expect(insuranceContract.termYears).toBe(3);
})

let contract: InsuranceContract;

beforeEach(() => {
    contract = new InsuranceContract("2", "Vera", true, "property", 100, 3);
    contract.activate();
});

afterEach(() => {
    contract.deactivate();
    console.log(`Contract ${contract.contractId} has been deactivated after test.`);
});

test("should activate the contract correctly", () => {
    contract.activate();
    expect(contract.isActive).toBeTruthy();
});

test("should deactivate the contract when deactivate() is called", () => {
    contract.deactivate();
    expect(contract.isActive).toBe(false);
});

test("should calculate total payment correctly", () => {
    expect(contract.calculateTotalPremium()).toBe(300);
});