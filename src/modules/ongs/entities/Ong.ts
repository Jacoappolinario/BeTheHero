import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Incident } from '../../incidents/entities/Incident';

@Entity('ongs')
class Ong {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  whatsapp: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Incident, incident => incident.ong)
  incident: Incident[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Ong };
