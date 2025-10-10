import {User} from '../src/User'

test('Verify user is not consent', ()=> {
    const user1 = new User("Mary", "Mets", false, 15);
    const consentGiven = user1.verifyConsent();
    expect(consentGiven).toBeFalsy();
})

test('Verify user is by default not consent', ()=> {
    const user1 = new User("John", "Doe", true, 20);
    const consentGiven = user1.verifyConsent();
    expect(consentGiven).toBeFalsy();
})

test('Verify user under 18 cannot be given consent', ()=> {
    const user1 = new User("Mary", "Mets", false, 15);
    user1.giveConsent();
    const consentGiven = user1.verifyConsent();
    expect(consentGiven).toBeFalsy();
})

test('Verify user over 18 is given consent', ()=> {
    const user1 = new User("John", "Doe", false, 20);
    user1.giveConsent();
    const consentGiven = user1.verifyConsent();
    expect(consentGiven).toBeTruthy();
})
// check age is < 0


// check user age == 0


// check user has revoked consent