function correct(string)
{
	// your code here
  let result = string.replaceAll('0', 'O')
  result = result.replaceAll('5','S')
  result = result.replaceAll('1','I')
  return result
}