import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skjGkboMRqXrITKlmhkngJV2P67j1WfTwKibWCBcUl6sSsak2dMo696doyROVtEATj48VZK6Nh8TKIsOD7hOomXCXd6FToLNwTHwXHKC0gQPSFWSHBwdIaJNnTr0weDlBKxGSTj4zf6B2muLN41M4i4VVRM8szztnYDkbEpoofd8ikLHr2w0",
})
