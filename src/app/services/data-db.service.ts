import { Injectable } from '@angular/core'; 
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import  {MessageI} from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private contactoCollection: AngularFirestoreCollection<MessageI>;

  constructor(private afs: AngularFirestore) {
    this.contactoCollection = afs.collection<MessageI>('contactos');
   }

   saveMessage(newContacto: MessageI): void{
     this.contactoCollection.add(newContacto);
   }
}
