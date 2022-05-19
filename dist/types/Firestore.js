"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
BIG IDEA


Query = State (string, Maybe<Either<Err, Res>>) () -> Promise<State (string, Maybe<Either<Err, Res>>) Maybe<Either<Err, Res>>>
FirestoreQueryState = State Query[] (string, Maybe<Either<Err, Res>>)[]

  getNext :: State FirestoreQueryState (Maybe Query)
  getNext = do
    (results, state) <- get
    let lefts = getLefts results
    if (len lefts) == 0 then
      (query, queries) = state.queryStack.pluck(isNothing)
      (_, res) = await $ runState $ query (State results ())
      if (isJust res) then
        put queries
        return res : results
      else
        getNext
    else
      return (filter isJust results)
    
*/
//# sourceMappingURL=Firestore.js.map