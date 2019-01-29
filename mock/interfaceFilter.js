/**
 * 生成随机回复数据
 * create by huyoo ON 2019/1/28
 */

const suffix = '.json', prefix = '/api';

module.exports = {
    [`${prefix}/dataManage/buildingAddress/fetchHouseCheckList${suffix}`]: function (mockData, request) {
        let jd = 120.000000000001;
        let wd = 36.26404109130858;
        mockData.data.list = mockData.data.list.map((one) => {
            jd += 0.001;
            wd += 0.0000000001;
            return Object.assign({}, one, { jd: String(jd), wd: String(wd), jwd: `${jd},${wd}` })
        });
        return mockData
    }
};
