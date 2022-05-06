const saveSSHFile = require('./../ssh/ssh_controller');
const {
    PATH_INVAID,
    DATA_INVALID,
    WRITE_FILE_ERROR
} = require('./../constants/global')
const assert = require('assert');

describe('ssh:save file', function () { 
    it(`should return ${PATH_INVAID} when empty path`, function () {
        return saveSSHFile({
            pathFile: '', privateKey: 'privateKey', publicKey: 'publicKey'
        }).then(data => {
            assert.equal(data, PATH_INVAID)
        })
        
    })
    it(`should return ${PATH_INVAID} when null path`, function () {
        return saveSSHFile({
            pathFile: null, privateKey: 'privateKey', publicKey: 'publicKey'
        }).then(data => {
            console.log(data)
            assert.equal(data, PATH_INVAID)
        })
    })
    it(`should return ${PATH_INVAID} when undifined path`, function () {
        return saveSSHFile({
            pathFile: null, privateKey: 'privateKey', publicKey: 'publicKey'
        }).then(data => {
            assert.equal(data, PATH_INVAID)
        })
    })

    it(`should return ${DATA_INVALID} when empty ssh priavtekey`, function () {
        return saveSSHFile({
            pathFile: '/test/data/path_example', privateKey: '', publicKey: 'publicKey'
        }).then(data => {
            assert.equal(data, DATA_INVALID)
        })
    })

    it(`should return ${DATA_INVALID} when null ssh priavtekey`, function () {
        return saveSSHFile({
            pathFile: '/test/data/path_example', privateKey: null, publicKey: 'publicKey'
        }).then(data => {
            assert.equal(data, DATA_INVALID)
        })
    })

    it(`should return ${DATA_INVALID} when null undifined priavtekey`, function () {
        return saveSSHFile({
            pathFile: '/test/data/path_example', privateKey: undefined, publicKey: 'publicKey'
        }).then(data => {
            assert.equal(data, DATA_INVALID)
        })
    })

    it(`should return ${DATA_INVALID} when empty ssh publickey`, function () {
        return saveSSHFile({
            pathFile: '/test/data/path_example', privateKey: 'privateKey', publicKey: ''
        }).then(data => {
            assert.equal(data, DATA_INVALID)
        })
    })

    it(`should return ${DATA_INVALID} when null ssh publickey`, function () {
        return saveSSHFile({
            pathFile: '/test/data/path_example', privateKey: 'privateKey', publicKey: null
        }).then(data => {
            assert.equal(data, DATA_INVALID)
        })
    })

    it(`should return ${DATA_INVALID} when null undifined publickey`, function () {
        return saveSSHFile({
            pathFile: '/test/data/path_example', privateKey: 'privateKey', publicKey: undefined
        }).then(data => {
            assert.equal(data, DATA_INVALID)
        })
    })

    it(`should return ${WRITE_FILE_ERROR} when err path `, function () {
        return saveSSHFile({
            pathFile: '/not-exist-folder/path_example_pub', privateKey: 'privateKey', publicKey: "publicKey"
        }).then(data => {
            assert.equal(data, WRITE_FILE_ERROR)
        })
    })

    it(`should return ket paths when created`, function () {
        return saveSSHFile({
            pathFile: 'test/data/path_example', privateKey: 'privateKey', publicKey: "publicKey"
        }).then(data => {
            assert.equal(data[0], 'test/data/path_example')
            assert.equal(data[1], 'test/data/path_example_pub')
        })
    })
})