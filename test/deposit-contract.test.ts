import {BaseContract, DepositContract} from '../src/contracts'

test('Deposit contract fields are correct', () =>{
    const depositContract = new DepositContract("1", "German", true, 100, 2);
    expect(depositContract.contractId).toBe("1");
    expect(depositContract.clientName).toBe("German");
    expect(depositContract.isActive).toBeTruthy();
    expect(depositContract.amount).toBe(100);
    expect(depositContract.interestRate).toBe(2);
})

let contract: DepositContract;

beforeEach(() => {
    contract = new DepositContract("2", "Laura", true, 100, 2);
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

test("should calculate interest rate correctly", () => {
    expect(contract.calculateInterest()).toBe(200);
});