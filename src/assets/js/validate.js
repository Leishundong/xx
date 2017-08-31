/**
 * Created by Administrator on 2017/8/16.
 */
import { Validator } from 'vee-validate';
const isphone = {
    messages: {
        en:(field, args) => field + '必须是11位手机号码',
    },
    validate: (value, args) => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
}
    Validator.extend('phone',isphone)

