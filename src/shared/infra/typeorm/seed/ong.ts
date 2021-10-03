import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');
  const id = uuidV4();
  const password = await hash('12345', 8);

  await connection.query(
    `INSERT INTO ongs(id, name, email, password, whatsapp, city, uf, created_at)
        values('${id}', 'Ong', 'ong@exemplo.com.br', '${password}', '61995639350', 'Brasilia', 'DF', 'now()')
    `,
  );

  await connection.close;
}

create().then(() => console.log('User admin created.'));
