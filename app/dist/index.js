"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path = __importStar(require("path"));
const typeorm_shared_1 = require("typeorm-shared");
const root = path.resolve(__dirname, '..');
const options = {
    type: 'sqlite',
    database: `${root}/data/sample.sqlite`,
    synchronize: true,
    logging: true
};
async function start() {
    const connection = await typeorm_1.createConnection(options);
    const repository = connection.getRepository(typeorm_shared_1.User);
    const users = await repository.find({ id: typeorm_1.In(['00f9955c-49e1-4391-b4f8-e4c0bd1d0ce2', '0d3a54cd-116b-4db5-8288-4e8d1ee21946']) });
    console.log(users);
}
(async () => {
    console.log('starting');
    await start();
    console.log('started');
})().catch(error => {
    console.log(`failed to start ${error}`);
});
