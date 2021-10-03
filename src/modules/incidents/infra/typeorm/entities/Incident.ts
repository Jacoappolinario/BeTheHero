import { Ong } from '@modules/ongs/infra/typeorm/entities/Ong';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('incidents')
class Incident {
  @PrimaryColumn()
  id: string;

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

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Incident };
