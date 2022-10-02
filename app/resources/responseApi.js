function successGet(data) {
    let dataResult = {
        "status": true,
        "message": "successfully get data",
        "code":200,
        "data": data
      }
      return dataResult
}

function successUpload(fileName) {
    return {
        "status": true,
        "message": "Upload Success",
        "code": 200,
        "file_name": fileName
    }
}

function successOrder(orderId) {
    let data = {
        "status": true,
        "message": "Order Registered",
        "code": 200,
        "order_id": orderId
    }
    return data
}

function successLogin(token, data) {
    const dataUser = {
        "id": data[0].id,
        "name": data[0].name,
        "role_id": data[0].role_id,
        "email": data[0].email,
        "phone": data[0].phone
    }
    return {
        "status": true,
        "message": "successfully login",
        "code": 200,
        "is_logged_in": 1,
        "token": token,
        "data": dataUser
    }
}

function unauthorized(message) {
    let dataUnauthorized = {
        "status": false,
        "message": message,
        "code": 403
    }
    return dataUnauthorized
}

function successUpdate(data) {
    let dataResult = {
        "status": true,
        "message": "successfully update data",
        "code":200,
        "data": data
    }
    return dataResult
}

function successTransaction() {
    return {
        "status": true,
        "message": "Transaction Success",
        "code": 200
    }
}

function internalServerError() {
    let dataError = {
        "status": false,
        "message": "internal server error, check console logs",
        "code":500,
    }
    return dataError
}

function userExist() {
    return {
        "status": false,
        "message": "user already exists",
        "code":400,
    }
}

function unprocessableEntityError(data) {
    let dataError = {
        "status": false,
        "message": "unprocessable entity",
        "code": 422,
        "data": data
    }
    return dataError
}

function successCreate(idData) {
    let dataInput = {
        "status": true,
        "message": "successfully create data",
        "code":201,
        "id": idData[0],
        }
    return dataInput
}

function successDelete(id) {
    let data = {
        "status": true,
        "message": "successfully delete data",
        "code":201,
        "id": id
        }
    return data
}

function dataNotFoundException() {
    let dataNotFound = {
        "status": false,
        "message": "data not found",
        "code": 404
    }
    return dataNotFound
}

function uploadFileException() {
    return {
        "status": false,
        "message": "Please Upload Photo File",
        "code":400
    }
}

module.exports = {
    successGet,
    internalServerError,
    successCreate,
    dataNotFoundException,
    successUpdate,
    unauthorized,
    successLogin,
    successDelete,
    uploadFileException,
    successUpload,
    successOrder,
    successTransaction,
    unprocessableEntityError,
    userExist
}