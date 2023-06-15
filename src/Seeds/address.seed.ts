// import { getRepository } from 'typeorm';
// import { User } from 'src/User/User.entity';
// import { Address } from 'src/Address/Address.entity';
// import { createConnection } from 'typeorm';

// async function seedData() {
//   // Create a new TypeORM connection
//   const connection = await createConnection();

//   // Obtain the repository for User and Address entities
//   const userRepository = getRepository(User);
//   const addressRepository = getRepository(Address);

//   // Create dummy Address data
//   const address1 = new Address();
//   address1.country = 'Country 1';
//   address1.city = 'City 1';
//   // Set other address properties

//   const address2 = new Address();
//   address2.country = 'Country 2';
//   address2.city = 'City 2';
//   // Set other address properties

//   // Save the addresses to the database
//   await addressRepository.save([address1, address2]);

//   // Create dummy User data
//   const user1 = new User();
//   user1.name = 'User 1';
//   user1.address = address1; // Associate the address with the user

//   const user2 = new User();
//   user2.name = 'User 2';
//   user2.address = address2; // Associate the address with the user

//   // Save the users to the database
//   await userRepository.save([user1, user2]);

//   // Close the connection
//   await connection.close();

//   console.log('Data seeding complete!');
// }

// seedData();








import { getRepository } from 'typeorm';
import { Address } from 'src/Address/Address.entity';

async function seedAddressData() {
  const addressRepository = getRepository(Address);

  // Create address entities
  const addresses = [
    {
      country: 'Country 1',
      state: 'State 1',
      city: 'City 1',
      pincode: '12345',
    },
    {
      country: 'Country 2',
      state: 'State 2',
      city: 'City 2',
      pincode: '67890',
    },
    // Add more address objects as needed
  ];

  // Save the addresses to the database
  await addressRepository.save(addresses);
}

export default seedAddressData;





