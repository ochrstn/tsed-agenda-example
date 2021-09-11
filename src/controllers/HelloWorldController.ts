import { AgendaService } from "@tsed/agenda";
import {Controller, Get, Inject, Req} from "@tsed/common";

@Controller("/hello-world")
export class HelloWorldController {

  @Inject()
  private agenda: AgendaService;

  @Get("/")
  async get(@Req() req: Req) {
    await this.agenda.schedule("in 5 seconds", "example.onDemand", { url: req.url })
    return "hello";
  }
}
