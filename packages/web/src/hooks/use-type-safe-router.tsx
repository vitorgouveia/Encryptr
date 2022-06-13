import { NextRouter, useRouter } from "next/router";

type TypeSafeRouter<QueryParams> = NextRouter & {
  query: QueryParams;
};

// prettier-ignore
export function useTypeSafeRouter<RouteQuery = {}>(router: NextRouter): TypeSafeRouter<RouteQuery> {
  return router as TypeSafeRouter<RouteQuery>;
}
