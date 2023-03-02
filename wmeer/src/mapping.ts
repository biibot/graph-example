import {
  Deposit as DepositEvent,
  Withdrawal as WithdrawalEvent,
} from "../generated/Wmeer/wmeer";
import { Deposit, Withdrawal } from "../generated/schema";

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.dst = event.params.dst;
  entity.wad = event.params.wad;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWithdrawal(event: WithdrawalEvent): void {
  let entity = new Withdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.src = event.params.src;
  entity.wad = event.params.wad;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
