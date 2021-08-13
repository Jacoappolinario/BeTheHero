import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Ong } from '../../ongs/entities/Ong';

@Entity('incidents')
class Incident {
  @PrimaryGeneratedColumn()
  id: string;

  // @PrimaryColumn()
  // id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @ManyToOne(() => Ong)
  @JoinColumn({ name: 'ong_id' })
  ong: Ong;

  @Column()
  ong_id: string;

  @CreateDateColumn()
  created_at: Date;

  // constructor() {
  //   if (!this.id) {
  //     this.id = uuidV4();
  //   }
  // }
}

export { Incident };
