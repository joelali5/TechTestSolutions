using Microsoft.AspNetCore.Mvc;

namespace CalculatorService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalculatorController : ControllerBase
    {
        private readonly SimpleCalculator calculator;

        public CalculatorController()
        {
            calculator = new SimpleCalculator();
        }

        [HttpGet("add")]
        public IActionResult Add(int start, int amount)
        {
            int result = calculator.Add(start, amount);
            return Ok(result);
        }

        [HttpGet("subtract")]
        public IActionResult Subtract(int start, int amount)
        {
            int result = calculator.Subtract(start, amount);
            return Ok(result);
        }
    }
}