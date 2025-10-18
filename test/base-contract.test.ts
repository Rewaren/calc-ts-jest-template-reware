import {BaseContract} from '../src/contracts'

test('Base contract fields are correct', () =>{
    const baseContract = new BaseContract("1", "Markus", true);
    expect(baseContract.contractId).toBe("1");
    expect(baseContract.clientName).toBe("Markus");
    expect(baseContract.isActive).toBeTruthy();
})

let contract: BaseContract;

beforeEach(() => {
    contract = new BaseContract("2", "Mary", true);
    contract.activate();
});

afterEach(() => {
    contract.deactivate();
    console.log(`Contract ${contract.contractId} has been deactivated after test.`);
});

// Tests
test("should activate the contract correctly", () => {
    contract.activate();
    expect(contract.isActive).toBeTruthy();
});

test("should deactivate the contract when deactivate() is called", () => {
    contract.deactivate();
    expect(contract.isActive).toBe(false);
});
