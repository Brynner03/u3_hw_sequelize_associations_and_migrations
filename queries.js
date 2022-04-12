const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const business = await Business.findAll()
    return business
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const getBAddy = await Business.findAll({ include: [Address]})
    return getBAddy
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const getBEmployee = await Business.findAll({ include: [Employee]})
    return getBEmployee
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const res = await Business.findAll({ include: [Address, Employee]})
    return res
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllBusinesses,
  getBusinessAddress,
  getBusinessEmployees,
  getBusinessAddressAndEmployee
}
