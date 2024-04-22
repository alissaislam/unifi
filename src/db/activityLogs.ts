import { ActivityLog } from "../models/ActivityLog";
import { MagicMoverState } from "../utils/enums/statesEnum";

export const activityLogs: ActivityLog[] = [
    { magicMoverId: '1', activity: MagicMoverState.Done, time: '2023-01-01T00:00:00Z' },
    { magicMoverId: '2', activity: MagicMoverState.Done, time: '2023-01-02T00:00:00Z' },
    { magicMoverId: '1', activity: MagicMoverState.Done, time: '2023-01-03T00:00:00Z' },
    { magicMoverId: '3', activity: MagicMoverState.Loading, time: '2023-01-04T00:00:00Z' },
    { magicMoverId: '1', activity: MagicMoverState.Done, time: '2023-01-05T00:00:00Z' },
    { magicMoverId: '2', activity: MagicMoverState.Done, time: '2023-01-06T00:00:00Z' },
    { magicMoverId: '2', activity: MagicMoverState.Done, time: '2023-01-07T00:00:00Z' },
    { magicMoverId: '2', activity: MagicMoverState.Done, time: '2023-01-08T00:00:00Z' },
    { magicMoverId: '2', activity: MagicMoverState.Done, time: '2023-01-09T00:00:00Z' },
    { magicMoverId: '3', activity: MagicMoverState.Done, time: '2023-01-10T00:00:00Z' },
    { magicMoverId: '3', activity: MagicMoverState.Done, time: '2023-01-11T00:00:00Z' },
    { magicMoverId: '3', activity: MagicMoverState.Done, time: '2023-01-12T00:00:00Z' },
  ];