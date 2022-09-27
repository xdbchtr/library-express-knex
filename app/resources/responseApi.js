function successGet(data) {
    let dataResult = {
        "message": "successfully get data",
        "code":200,
        "data": data
      }
      return dataResult
}

function successUpload(fileName) {
    return {
        "message": "Upload Success",
        "code": 200,
        "file_name": fileName
    }
}

function successOrder(orderId) {
    let data = {
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
        "message": "successfully login",
        "code": 200,
        "is_logged_in": 1,
        "token": token,
        "data": dataUser
    }
}

function unauthorized(message) {
    let dataUnauthorized = {
        "message": message,
        "code": 403
    }
    return dataUnauthorized
}

function successUpdate(data) {
    let dataResult = {
        "message": "successfully update data",
        "code":200,
        "data": data
    }
    return dataResult
}

function successTransaction() {
    return {
        "message": "Transaction Success",
        "code": 200
    }
}

function internalServerError() {
    let dataError = {
        "message": "internal server error, check console logs",
        "code":500,
    }
    return dataError
}

function userExist() {
    return {
        "message": "user already exists",
        "code":400,
    }
}

function unprocessableEntityError(data) {
    let dataError = {
        "message": "unprocessable entity",
        "code": 422,
        "data": data
    }
    return dataError
}

function successCreate(idData) {
    let dataInput = {
        "message": "successfully create data",
        "code":201,
        "id": idData,
        }
    return dataInput
}

function successDelete(id) {
    let data = {
        "message": "successfully delete data",
        "code":201,
        "id": id
        }
    return data
}

function dataNotFoundException() {
    let dataNotFound = {
        "message": "data not found",
        "code": 404
    }
    return dataNotFound
}

function uploadFileException() {
    return {
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