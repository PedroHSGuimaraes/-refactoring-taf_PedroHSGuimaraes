#!/bin/bash

# Load test cases from the file
test_cases=$(cat test_cases.txt)

# Loop through each test case
n=1
while read -r test_case; do
  # Extract input values from the test case string
  gender=$(echo $test_case | awk '{print $1}')
  height=$(echo $test_case | awk '{print $2}')
  barReps=$(echo $test_case | awk '{print $3}')
  barSeconds=$(echo $test_case | awk '{print $4}')
  abs=$(echo $test_case | awk '{print $5}')
  runDistance=$(echo $test_case | awk '{print $6}')
  runTime=$(echo $test_case | awk '{print $7}')
  swimDistance=$(echo $test_case | awk '{print $8}')
  swimTime=$(echo $test_case | awk '{print $9}')
  diveTime=$(echo $test_case | awk '{print $10}')
  expected_output=$(echo $test_case | awk '{print $11}')

  # Run the JavaScript code with the input values as arguments
  output=$(node script.js $gender $height $barReps $barSeconds $abs $runDistance $runTime $swimDistance $swimTime $diveTime)
  # Compare the output with the expected output
  if [ "$output" = "$expected_output" ]; then
    # Output result in green if the test passed
    echo -e "\033[32mPASS\033[0m: $n - $gender $height $barReps $barSeconds $abs $runDistance $runTime $swimDistance $swimTime $diveTime"
  else
    # Output result in red if the test failed
    echo -e "\033[31mFAIL\033[0m: $n - $gender $height $barReps $barSeconds $abs $runDistance $runTime $swimDistance $swimTime $diveTime"
  fi
  n=$(( $n + 1 ))
done <<< "$test_cases"