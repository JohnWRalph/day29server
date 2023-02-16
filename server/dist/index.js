"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const firebaseConfig = {
    apiKey: "AIzaSyDlScYuL98ie3tKlUYyh6-vX7bPg8ZNFO0",
    authDomain: "day29-4fec3.firebaseapp.com",
    projectId: "day29-4fec3",
    storageBucket: "day29-4fec3.appspot.com",
    messagingSenderId: "256472078999",
    appId: "1:256472078999:web:5d635b12d6f83f5a8867d2",
    measurementId: "G-GNJSLWTBCJ"
};
// Initialize Firebase
const firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
app.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = (0, firestore_1.getFirestore)(firebaseApp);
        const docRef = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(database, "users"));
        var userList = docRef.docs.map(doc => doc.data());
        res.send(userList);
    });
});
app.post("/", function (req, res) {
    // const database = getFirestore(firebaseApp);
    // const docRef = await getDocs(collection)
});
app.listen(3002);
