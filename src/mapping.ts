//@ts-ignore
import { Bytes, Event, Block, ByteArray } from "@hyperoracle/zkgraph-lib";

var null_address = Bytes.fromHexString(
  "0x0000000000000000000000000000000000000000"
  );
var transfer_event_erc721 = Bytes.fromHexString(
  "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62"
);

var free = Bytes.fromHexString("Value: 0");

export function handleBlocks(blocks: Block[]): Bytes {
  let events: Event[] = blocks[0].events;

  // Check all new mints events (transfer from null address)
  // Check if value is 0 to see if it is a free mint
  let free_mint_collections: ByteArray = ByteArray.empty();
  for (let i = events.length - 1; i >= 0; i--) {
    //let flagtopic4 = 'topic4' in events[i]; 
    if (
      //flagtopic4 &&
      events[i].topic2 == null_address && 
      events[i].esig == transfer_event_erc721 && 
      events[i].data == free
      ) {
        free_mint_collections = free_mint_collections.concat(events[i].address);
    }
  }
  let state = Bytes.fromByteArray(free_mint_collections);

  return state;
}