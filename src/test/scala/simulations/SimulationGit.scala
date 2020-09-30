package test.scala.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class SimulationGit extends Simulation{

  val loop = 5
  val users = 10
  val pause = 1
  val baseUrl = "http://localhost:3000/"

  val httpConf = http.baseUrl(baseUrl)

  def getCommitsOne() = {
    exec(
      http("Get commit /api/git/diff/d08a4b6")
        .get("/api/git/diff/d08a4b6")
        .check(status.in(200 to 210))
    )
  }

  def getCommitsTwo() = {
    exec(
      http("Get commit /api/git/diff/d08a4b6")
        .get("/api/git/diff/6861562")
        .check(status.in(200 to 210))
    )
  }

  val scn = scenario("Get commit").repeat(loop){
    exec(getCommitsOne()).pause(pause)
      .exec(getCommitsTwo()).pause(pause)
  }

  setUp(
    scn.inject(
      nothingFor(3 seconds),
      atOnceUsers(users),
      rampUsers(20) during (10 seconds)
    ).protocols(httpConf)
  )
}
