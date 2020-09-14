const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const dataBD = require('./connectionBD');

const secretOfKey = '-----BEGIN CERTIFICATE-----\n' +
    'MIIDDTCCAfWgAwIBAgIJI2W4WWI+fqlZMA0GCSqGSIb3DQEBCwUAMCQxIjAgBgNV\n' +
    'BAMTGWRldi11d2xsMzN4Yi5ldS5hdXRoMC5jb20wHhcNMjAwNzIwMTk1NjQ2WhcN\n' +
    'MzQwMzI5MTk1NjQ2WjAkMSIwIAYDVQQDExlkZXYtdXdsbDMzeGIuZXUuYXV0aDAu\n' +
    'Y29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzO0RcUTK1FpWoDw9\n' +
    'yodZqVVAx8j8oUTptgiqokxtpKb5YfHbI2wtlDT74UbYj6N/N4Dn4Ca8OQbo9sae\n' +
    'vFmRTDzeOiem24CLuikF6viKzFsbhShKODa7rkYiq3sqNxT9GS8m6uGH+3Ggf+8D\n' +
    'hEFPrM/sy855yFWm8Y4+zg0W4K06TPOyWohgbgYvKyRss6XEtvH2fWzmCBRQMGC/\n' +
    'O24nEhPtyC6YcHkL09Tg/03fiL1qHCODdwtxAjkFdRu3LUzOCVu3meNlQjQEzxU+\n' +
    'p9A0suK/kP7D8svpvgEE5HEFqXBPujX96eiB0jzVXQr8m6qICLKhJkM3HNNELTh6\n' +
    'svdolQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQ0ARQtsQu2\n' +
    '3W6oW4pKFGlI1Dj8MDAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEB\n' +
    'ABED/Mr0ZBgMBB8zcdKt/nVu4csu7rtDCt9QF5NTmx+rRt7/EpCOm3x7R2oVYISD\n' +
    'r7RcT8f6T2p/azZnpNCDDIDkjWr4Ep//qju95OJQaIoivrZwX2fLuGG2v72G4yio\n' +
    'AcPka4oigbFgOYa6s4u6vTBl3IptVW9Ocm4m4dXCz576kdWuKJoN7MK+Q4DnGY2e\n' +
    '62Gtx32yKiC0CgErEZrttPiA6+hXW93ufwwC3llFlBhHz2g0D0z3ADLtmOedFu3R\n' +
    'Jha7ptxyHFN5r3kYKUKKxvXf/CQ0/zm0/ygwKbvKdQLJwNuCh0kXMcraOducK/T0\n' +
    '0BlrL37n/yuGc6hgVlAIZzM=\n' +
    '-----END CERTIFICATE-----';

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secretOfKey;

const strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    const arr =  await dataBD.openUsers(jwt_payload.email);
    if(arr.length > 0){
        next(null, {userData:arr[0]});
    } else {
      next(null,false);
    }
});

module.exports.strategy = strategy;
