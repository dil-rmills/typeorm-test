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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateConnection = void 0;
const typeorm_1 = require("typeorm");
const path = __importStar(require("path"));
const user_1 = require("./entities/user");
const root = path.resolve(__dirname, '..');
const connectionManager = typeorm_1.getConnectionManager();
exports.getOrCreateConnection = async (clientId) => {
    if (connectionManager.has(clientId)) {
        const connection = connectionManager.get(clientId);
        if (!connection.isConnected) {
            await connection.connect();
        }
        return connection;
    }
    const connection = tryCreateConnection(clientId);
    return connection;
};
const tryCreateConnection = async (clientId) => {
    const connection = connectionManager.create({
        type: 'sqlite',
        database: `${root}/data/sample.sqlite`,
        synchronize: true,
        logging: true,
        entities: [user_1.User]
    });
    if (!connection.isConnected) {
        await connection.connect();
    }
    return connection;
};
//# sourceMappingURL=connection.manager.js.map