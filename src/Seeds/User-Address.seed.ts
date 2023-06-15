import { getRepository} from 'typeorm';
import { User } from 'src/User/User.entity';
import { Address } from 'src/Address/Address.entity';
import userData from './user-data.json';
import addressData from './address-data.json';

async function seedUserAndAddressData() {
  const userRepository = getRepository(User);
  const addressRepository = getRepository(Address);

  // Create address entities
  const addresses = addressData.map((data) => {
    const address = new Address();
    address.country = data.country;
    address.state = data.state;
    address.city = data.city;
    address.pincode = data.pincode;
    return address;
  });

  // Save the addresses to the database
  await addressRepository.save(addresses);

  // Create user entities
  const users = userData.map((data, index) => {
    const user = new User();
    user.name = data.name;
    user.address = addresses[index];
    return user;
  });

  // Save the users to the database
  await userRepository.save(users);
}
export default seedUserAndAddressData;
