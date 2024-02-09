import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const ref_id = () => {
    // Membuat UUID baru
    const uuidRef = uuidv4();

    // Membuat waktu saat ini dalam format tertentu
    const currentTime = moment().format('YYYYMMDDHHmmss');

    // Menggabungkan UUID dan waktu saat ini untuk membuat ref_id
    const ref = `${uuidRef}_${currentTime}`;
    return ref;
};
