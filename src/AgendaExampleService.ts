import {Agenda, Define, Every} from "@tsed/agenda";
import { $log } from "@tsed/logger";
import {Job} from "agenda";

@Agenda({ namespace: "example" })
export class AgendaExampleService {
  @Every("10 seconds", {
    name: "10sec",
  })
  async runEvery10Sec(job: Job) {
    $log.info("runEvery10Sec", job.attrs._id?.toHexString())
  }

  @Define({name: "onDemand"})
  async onDemand(job: Job) {
    $log.info("onDemand", job.attrs.data?.url)
  }
}