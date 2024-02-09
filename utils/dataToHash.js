import crypto from "crypto";

export const hashData = async (refID) => {
    const appUsername = process.env['APP_USERNAME_DIGIFLAZZ']
    const appKey = process.env['APP_DEVKEY_DIGIFLAZZ']

    const data = appUsername + appKey + refID;
    const md5 = crypto.createHash('md5').update(data).digest('hex');
    return md5;
};