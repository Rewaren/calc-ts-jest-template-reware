import {BaseContract, LoanContract} from '../src/contracts'

test('Deposit contract fields are correct', () =>{
    const loanContract = new LoanContract("1", "Gunnar", true, 10000, 200, 50);
    expect(loanContract.contractId).toBe("1");
    expect(loanContract.clientName).toBe("Gunnar");
    expect(loanContract.isActive).toBeTruthy();
    expect(loanContract.loanAmount).toBe(10000);
    expect(loanContract.monthlyPayment).toBe(2);
    expect(loanContract.loanTermMonths).toBe(50);
})

let contract: LoanContract;

beforeEach(() => {
    contract = new LoanContract("2", "Liis", true, 10000, 200, 50);
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
    expect(contract.calculateTotalPayment()).toBe(10000);
});