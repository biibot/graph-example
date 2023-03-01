import {
  Received as ReceivedEvent,
  SendToken as SendTokenEvent,
} from "../generated/Donation/Donation";
import { Received, SendToken } from "../generated/schema";

export function handleReceived(event: ReceivedEvent): void {
  let entity = new Received(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.donor = event.params.Donor;
  entity.value = event.params.Amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSendToken(event: SendTokenEvent): void {
  let entity = new SendToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.receiver = event.params.Receiver;
  entity.value = event.params.Amount;
  entity.ip = event.params.ip;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
