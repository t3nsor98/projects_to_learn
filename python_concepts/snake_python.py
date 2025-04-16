# Optimized Snake Game in Python
# Based on @TokyoEdTech's tutorial

import turtle
import time
import random


class SnakeGame:
    def __init__(self):
        # Game settings
        self.delay = 0.1
        self.score = 0
        self.high_score = 0
        self.segments = []

        # Set up the screen
        self.setup_screen()

        # Create game objects
        self.create_head()
        self.create_food()
        self.create_scoreboard()

        # Set up controls
        self.setup_controls()

        # Start game
        self.run_game()

    def setup_screen(self):
        """Initialize the game window"""
        self.window = turtle.Screen()
        self.window.title("Snake Game - Optimized")
        self.window.bgcolor("green")
        self.window.setup(width=600, height=600)
        self.window.tracer(0)  # Turns off screen updates for better performance

    def create_head(self):
        """Create the snake's head"""
        self.head = turtle.Turtle()
        self.head.speed(0)
        self.head.shape("square")
        self.head.color("black")
        self.head.penup()
        self.head.goto(0, 0)
        self.head.direction = "stop"

    def create_food(self):
        """Create the snake's food"""
        self.food = turtle.Turtle()
        self.food.speed(0)
        self.food.shape("circle")
        self.food.color("red")
        self.food.penup()
        self.move_food()

    def create_scoreboard(self):
        """Create the score display"""
        self.pen = turtle.Turtle()
        self.pen.speed(0)
        self.pen.shape("square")
        self.pen.color("white")
        self.pen.penup()
        self.pen.hideturtle()
        self.pen.goto(0, 260)
        self.update_score()

    def update_score(self):
        """Update the score display"""
        self.pen.clear()
        self.pen.write(
            f"Score: {self.score}  High Score: {self.high_score}",
            align="center",
            font=("Courier", 24, "normal"),
        )

    def setup_controls(self):
        """Set up keyboard controls"""
        self.window.listen()
        self.window.onkeypress(self.go_up, "w")
        self.window.onkeypress(self.go_down, "s")
        self.window.onkeypress(self.go_left, "a")
        self.window.onkeypress(self.go_right, "d")
        # Add arrow key support
        self.window.onkeypress(self.go_up, "Up")
        self.window.onkeypress(self.go_down, "Down")
        self.window.onkeypress(self.go_left, "Left")
        self.window.onkeypress(self.go_right, "Right")

    def go_up(self):
        if self.head.direction != "down":
            self.head.direction = "up"

    def go_down(self):
        if self.head.direction != "up":
            self.head.direction = "down"

    def go_left(self):
        if self.head.direction != "right":
            self.head.direction = "left"

    def go_right(self):
        if self.head.direction != "left":
            self.head.direction = "right"

    def move(self):
        """Move the snake in the current direction"""
        if self.head.direction == "up":
            self.head.sety(self.head.ycor() + 20)
        elif self.head.direction == "down":
            self.head.sety(self.head.ycor() - 20)
        elif self.head.direction == "left":
            self.head.setx(self.head.xcor() - 20)
        elif self.head.direction == "right":
            self.head.setx(self.head.xcor() + 20)

    def move_food(self):
        """Move food to a random position"""
        x = random.randint(-280, 280)
        y = random.randint(-280, 280)
        self.food.goto(x, y)

    def add_segment(self):
        """Add a new segment to the snake"""
        new_segment = turtle.Turtle()
        new_segment.speed(0)
        new_segment.shape("square")
        new_segment.color("grey")
        new_segment.penup()
        self.segments.append(new_segment)

    def reset_game(self):
        """Reset the game state after collision"""
        time.sleep(1)
        self.head.goto(0, 0)
        self.head.direction = "stop"

        # Hide and clear segments
        for segment in self.segments:
            segment.goto(1000, 1000)
        self.segments.clear()

        # Reset score and speed
        self.score = 0
        self.delay = 0.1
        self.update_score()

    def check_collision_with_border(self):
        """Check if snake hit the border"""
        if (
            self.head.xcor() > 290
            or self.head.xcor() < -290
            or self.head.ycor() > 290
            or self.head.ycor() < -290
        ):
            return True
        return False

    def check_collision_with_food(self):
        """Check if snake ate the food"""
        if self.head.distance(self.food) < 20:
            return True
        return False

    def check_collision_with_body(self):
        """Check if snake hit itself"""
        for segment in self.segments:
            if segment.distance(self.head) < 20:
                return True
        return False

    def update_segments(self):
        """Update the positions of all snake segments"""
        # Move segments in reverse order
        for index in range(len(self.segments) - 1, 0, -1):
            x = self.segments[index - 1].xcor()
            y = self.segments[index - 1].ycor()
            self.segments[index].goto(x, y)

        # Move first segment to head position
        if self.segments:
            self.segments[0].goto(self.head.xcor(), self.head.ycor())

    def run_game(self):
        """Main game loop"""
        while True:
            self.window.update()

            # Check for collisions
            if self.check_collision_with_border() or self.check_collision_with_body():
                self.reset_game()

            # Check for food collision
            if self.check_collision_with_food():
                self.move_food()
                self.add_segment()

                # Speed up the game slightly
                self.delay *= 0.99

                # Update score
                self.score += 10
                if self.score > self.high_score:
                    self.high_score = self.score

                self.update_score()

            # Update segment positions
            self.update_segments()

            # Move snake head
            self.move()

            # Pause to control game speed
            time.sleep(self.delay)


if __name__ == "__main__":
    game = SnakeGame()
    turtle.mainloop()
